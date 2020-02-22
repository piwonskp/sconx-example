
# coding: utf-8

# In[1]:


from io import StringIO
import json


# In[2]:


def f_get_key(val, dic): 
    for key, value in dic.items(): 
         if val == value: 
            return key 


# In[3]:


def f_compress(data):

    l_data_compress = []
    #inicjalizacja slownika na podstawie kodow ASCII
    size = 256
    dictionary = dict((i, chr(i)) for i in range(size))

    #ciag poczatkowy
    prev_char = ""
    for char in data: 
        #analizowany ciag
        chars = prev_char + char
        if chars in dictionary.values():
            #zapisanie analizowanego ciagu jako ciag poczatkowy
            prev_char = chars
        else:
            #kompresja ciagu zawierajacego sie w slowniku
            l_data_compress.append(f_get_key(prev_char, dictionary))
            #dodanie do slownika nowego ciagu znakow
            dictionary.update( {size : chars})
            size += 1
            prev_char = char
    if chars:
        #kompresja ostatniego ciagu 
        l_data_compress.append(f_get_key(prev_char, dictionary))
        
    l_data_compress =''.join(map(chr, l_data_compress))
    return l_data_compress


# In[4]:


def f_decompress(data):
    data = list(map(ord, data))
    
    #inicjalizacja slownika na podstawie kodow ASCII
    size = 256
    dictionary = dict((i, chr(i)) for i in range(size))
    
    data_decompress = StringIO()
    #pobranie pierwszego znaku z danych skompresowanych
    char = chr(data.pop(0))
    #zapis pierwszego ciagu
    data_decompress.write(char)
    for key in data:
        #pobieranie ciagu ze slownika
        if key in dictionary.keys():
            val = dictionary.get(key)
        #inicjalizacja nowego ciagu, nie istniejacego w slowniku
        elif key == size:
            val = char + char[0]
        #zapis ciagu po dekompresji
        data_decompress.write(val)
        #dodanie do slownika nowego ciagu znakow
        dictionary.update( {size : char + val[0]})
        size += 1
    
        #zapisanie analizowanego ciagu jako ciag poczatkowy
        char = val
        
    return data_decompress.getvalue()


# Załadowanie danych w formacie JSON

# In[5]:


# with open('example_2.json', 'r') as file:
#     data = json.load(file)


# Zamiana struktury słownika na string

# In[6]:


# str_data = json.dumps(data)


# In[7]:


# data_compressed = f_compress(str_data)


# In[8]:


# data_decompressed = f_decompress(data_compressed)


# Zamiana slownika na strukture slownikowa

# In[9]:


# json_data = json.loads(data_decompressed)

