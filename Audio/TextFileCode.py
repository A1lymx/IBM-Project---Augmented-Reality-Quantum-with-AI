## @package IBMTextToSpeech
# This package provides an open-source implementation for an automatic text-to-speech converter using IBM Watson's Text to Speech API.
# 
# The IBMTextToSpeech class simplifies the generation of speech from a text file with the help of IBM Watson's Text to Speech service.
# The user must provide the API key and URL of the service for authentication.
# The script reads all text files from a specified location and converts their contents into speech.
# It assumes that each text file contains paragraphs separated by two newline characters and processes them paragraph by paragraph.
# The output audio file location is set by default but can be changed.
# This implementation can be freely redistributed and modified.
# @author George Gaumond
# @date 02-Mar-2024

import requests
import base64
import os

## The IBMTextToSpeech class.
# This class provides methods to convert text files to speech using IBM Watson's Text to Speech API.
class IBMTextToSpeech:
    ## The constructor.
    # Initializes the IBMTextToSpeech object with necessary attributes.
    # @param self The object pointer.
    def __init__(self):
        ## The API key for IBM Watson Text to Speech AP (key and url). Audio files are saved to C:/Test/
        self.api_key = ""
        self.service_url = ""
        self.text_file_location = "C:/Test/"

    ## Processes each text file and converts its content to speech.
    # The text files should be named from model_1.txt to model_7.txt.
    # Each paragraph is converted separately.
    # @param self The object pointer.
    def run(self):
        for i in range(1, 8):
            text_filename = f"model_{i}.txt"
            text_to_convert = self.read_text_from_file(os.path.join(self.text_file_location, text_filename))
            if text_to_convert:
                paragraphs = text_to_convert.split("\n\n")
                for j, paragraph in enumerate(paragraphs, start=1):
                    print("Doing paragraph ", j)
                    if paragraph.strip():
                        response = self.convert_text_to_speech(paragraph)
                        if response.ok:
                            audio_filename = f"model_{i}_{chr(96+j)}.wav" if len(paragraphs) > 1 else f"model_{i}.wav"
                            with open(os.path.join(self.text_file_location, audio_filename), 'wb') as audio_file:
                                audio_file.write(response.content)
                        else:
                            print(f"Failed to convert paragraph {j} of text to speech for {text_filename}: {response.text}")

    ## Reads text from a file.
    # @param self The object pointer.
    # @param file_path The path to the text file.
    # @return The content of the text file as a string, or an empty string if an error occurs.
    def read_text_from_file(self, file_path):
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                return file.read()
        except Exception as e:
            print(f"Error reading text file {file_path}: {e}")
            return ""

    ## Converts text to speech using IBM Watson's Text to Speech API.
    # @param self The object pointer.
    # @param text_to_convert The text to be converted into speech.
    # @return The response from the IBM Watson Text to Speech API.
    def convert_text_to_speech(self, text_to_convert):
        url = f"{self.service_url}/v1/synthesize"
        params = {'voice': 'en-US_OliviaV3Voice', 'accept': 'audio/wav', 'text': text_to_convert}
        headers = {'Authorization': f'Basic {base64.b64encode(f"apikey:{self.api_key}".encode("ascii")).decode("ascii")}'}
        response = requests.get(url, headers=headers, params=params)
        return response

if __name__ == "__main__":
    tts = IBMTextToSpeech()
    tts.run()
