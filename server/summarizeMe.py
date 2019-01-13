from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.stem.snowball import SnowballStemmer
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.tokenize import RegexpTokenizer
import nltk
import json
import operator

def summarize(text):
    result = dict()
    result["text"] = ""
    result["stats"] = dict()
    result["stats"]["relevant_words"] = []
    result["stats"]["word_length"] = 0
    result["stats"]["avg_contrast"] = ""
    result["stats"]["avg_current"] = ""
    result["stats"]["totalSummaries"] = 0

    news = text
    summarySize = 0; # Store size of summary to retrieve stats

    # RegexpTokenizer used to avoid punctuation signs
    tokenizer = RegexpTokenizer(r"[a-zA-Z_']+")
    words = tokenizer.tokenize(news)
    sentences = sent_tokenize(news)

    # Retrieve set to remove stopwords from analysis
    stopWords = set(stopwords.words("english"))

    # Use stemmers in the future, maybe run the code with both and retrieve most efficient
    ps = PorterStemmer()
    pss = SnowballStemmer("english")
    freq = dict()            # Frequency array for words
    sentenceVal = dict()     # Number of instances a word from freq is contained in a sentence

    for w in words:
        w = w.lower()
        if w in stopWords:
            continue
        if w in freq:
            freq[w] += 1
        else:
            freq[w] = 1
        result["stats"]["word_length"] += 1

    # Sort frequency dict to display most frequent values first
    freq = sorted(freq.items(), key=operator.itemgetter(1), reverse=True)
    #for f in freq:
        #print("%s : %d" % (f[0], f[1]))

    counter = 0
    for w in freq:
        # print(w)
        word = dict()
        word["word"] = w[0]
        word["relevancy"] = "{:.2%}".format(w[1]/result["stats"]["word_length"])
        result["stats"]["relevant_words"].append(word)
        if counter > 5:
            break
        counter += 1


    #print("Sentences: ")

    # Tokenize into sentences
    for sentence in sentences:
        # print(sentence)
        # print()
        for f in freq:
            if f[0] in sentence.lower():
                if sentence[:12] in sentenceVal:
                    sentenceVal[sentence[:12]] += f[1]
                else:
                    sentenceVal[sentence[:12]] = f[1]

    # Find the average value of a sentence
    sumValues= 0
    for values in sentenceVal:
        # print(values, " : ", sentenceVal[values])
        sumValues+= sentenceVal[values]

    # Average value of a sentence from original text
    average = int(sumValues/ len(sentenceVal))

    # print("\nSUMMARY ----------------------------------------------\n")
    for sentence in sentences:
        # If a sentence's value more than twice the average, add it to the summary
        # ENHANCEMENT: make the threshold a variable and let the user determine the size of the summary
        if sentence[:12] in sentenceVal and sentenceVal[sentence[:12]] > (1.5 * average):
            summarySize += 1
            # print(sentence)
            result["text"] +=  " " + sentence

    # Difference = 1 - length of summary / length of original text
    difference = "{:.1%}".format(1 - len(result["text"])/len(text))

    # Open the mini db
    db = json.load(open('db.json'))

    # Find the contrast between the average and current reduction
    fDiff = 1 - len(result["text"])/len(text)
    # print("{} current and {} avg".format(fDiff, db["avgReduction"]))
    if(fDiff > db["avgReduction"]):
        result["stats"]["avg_contrast"] = "above"
    elif(fDiff < db["avgReduction"]):
        result["stats"]["avg_contrast"] = "below"
    else:
        result["stats"]["avg_contrast"] = "equal to"

    # Save stats to possibly display
    result["stats"]["avg_current"] = "{:.1%}".format(db["avgReduction"])
    result["stats"]["totalSummaries"] = db["totalSummaries"]

    # Change avg reduction: (currentAvg*numOfSummaries + newAvg) / numOfSummaries+1
    db["avgReduction"] = (db["avgReduction"] * db["totalSummaries"] + fDiff) / (db["totalSummaries"] + 1)

    # Add 1 to number of Summaries
    db["totalSummaries"] += 1

    # Store changes into mini db
    with open('db.json', 'w') as outfile:
        json.dump(db, outfile, default=lambda o: o.__dict__, indent=4)

    # Store difference in string percentage format
    result["stats"]["reduced_by"] = difference

    # DEBUGGING
    # print("\nArticle reduced by ", difference)
    # print("Average reduction is currently {}".format(db["avgReduction"]))
    # print("Total summaries is currently {}".format(db["totalSummaries"]))

    return result
