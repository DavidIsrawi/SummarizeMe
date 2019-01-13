from application import application
from sampleText import text
import unittest
import json

class BasicTests(unittest.TestCase):
    
    def test_retrieve_stats(self):
        tester = application.test_client(self)
        response = tester.get('/stats')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(b'statistics' in response.data)

    def test_retrieve_index(self):
        tester = application.test_client(self)
        response = tester.get('/', content_type='html/text')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(b'Summarize Me Server' in response.data)

    def test_retrieve_summary(self):
        tester = application.test_client(self)
        response=tester.post('/summary', 
                       data=json.dumps(dict(text = text)),
                       content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(b'result' in response.data)
        
if __name__ == '__main__':
    unittest.main()