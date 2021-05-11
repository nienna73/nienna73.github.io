# Persephone
This document serves as an overview of everything I've learned about Persephone.

## What is Persephone?
Persephone is a software package that leverages machine learning to transcribe speech.
Persephone is especially useful for smaller speech databases and is able to learn 
on a small dataset.

## Why use Persephone?
The proposed use for Persephone is to reduce the amount of time linguists need to spend
transcribing data by training a model to recognize speech. The model can then write transcriptions 
files on its own with relatively high accuracy. It is able to recognize phonemes and tone independently 
or together and typically produces results with around a 30% phoneme error rate (PER).

## What technologies does Persephone use?
Persephone leverages many machine learning technologies to work effectively.

### Connectionist Temporal Classification (CTC)
CTC is a method of traversing a feature vector that follows the least-loss path.
In  Persephone, the feature vectors are stored in the `*.fbank.npy` files and can 
be read using the following python code:
```
import numpy as np
data = np.load('*.fbank.npy')
print(data)
```
These features represent the most likely phoneme spoken at a given timestep. 
Phonemes are recorded using a set of characters for the phonemes themselves, 
and a special character called a "blank", for example: '-'. Duplicate characters 
must be separated by a blank character to differentiate between words such as "to"
and "too".
CTC walks through this feature vector and, at each timestep, decides which phoneme 
was most likely spoken. For a more in depth explanation of CTC, reference 
[An Intuitive Explanation of Connectionist Temporal Classification](https://towardsdatascience.com/intuitively-understanding-connectionist-temporal-classification-3797e43a86c)

### Long Short-term Memory (LSTM)

### Recurrent Neural Network (RNN)

## How does it work?

### How do I train a model?

### How do I transcribe untranscribed data?
To transcribe an untranscribed file, you need to add the file stem to a file called `untranscribed_prefixes.txt`. So if I had a file called `Session01.wav`, I would add `Session01` on its own line in the file `untranscribed_prefixes.txt`.

## What do the output files mean?

## Further Reading
* [An Intuitive Explanation of Connectionist Temporal Classification](https://towardsdatascience.com/intuitively-understanding-connectionist-temporal-classification-3797e43a86c)
* [Evaluating phonemic transcription of low-resource tonallanguages for language documentation](https://halshs.archives-ouvertes.fr/halshs-01709648/document)