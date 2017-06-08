from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.stem.snowball import SnowballStemmer
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.tokenize import RegexpTokenizer
import operator

def summarize(text):
    result = dict()
    result["text"] = ""
    result["stats"] = dict()
    result["stats"]["relevant_words"] = []
    result["stats"]["word_length"] = 0

    news = text

    # RegexpTokenizer used to avoid punctuation signs
    tokenizer = RegexpTokenizer(r"\w+")
    words = tokenizer.tokenize(news)
    sentences = sent_tokenize(news)

    stopWords = set(stopwords.words("english"))
    ps = PorterStemmer()
    pss = SnowballStemmer("english")
    freq = dict()            # Frequency array for words
    sentenceVal = dict()     # Number of instances a word from freq is contained in a sentence

    for w in words:
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
        print(w)
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
            if f[0] in sentence:
                if sentence[:12] in sentenceVal:
                    sentenceVal[sentence[:12]] += f[1]
                else:
                    sentenceVal[sentence[:12]] = f[1]

    sum = 0

    for values in sentenceVal:
        # print(values, " : ", sentenceVal[values])
        sum += sentenceVal[values]

    summarySize = 0;

    average = int(sum / len(sentenceVal))
    # print("Average is ", average)
    print("\nSUMMARY ----------------------------------------------\n")
    for sentence in sentences:
        if sentenceVal[sentence[:12]] > (2 * average):
            #print(sentenceVal[sentence[:12]], " > ", average)
            summarySize += 1
            print(sentence)
            result["text"] += sentence

    difference = "{:.1%}".format(summarySize/len(sentenceVal))
    result["stats"]["reduced_by"] = difference
    print("\nArticle reduced by ", difference)
    return result
