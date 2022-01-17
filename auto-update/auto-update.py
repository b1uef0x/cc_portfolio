import requests
import zipfile
import os
import re
import shutil

url = 'https://www.dropbox.com/sh/1bugq00jms3wrh4/AAC15IB1g4Xe71AXNEymzMt8a?dl=1'
r = requests.get(url, allow_redirects=True)
open('portfolio.zip', 'wb').write(r.content)

with zipfile.ZipFile("portfolio.zip","r") as zip_ref:
    zip_ref.extractall("./portfolio_dir")
basedir = "./portfolio_dir"
basefinaldir = "../public/Chiara_Corey_Design_Portfolio"
for fn in os.listdir(basedir):
    nw = re.sub('[^0-9a-zA-Z]', '_', fn)
    os.rename(basedir + "/" + fn,basedir + "/" + nw)
try:
    shutil.rmtree(basefinaldir)
except OSError as e:
    print(e.strerror)
try:
    shutil.move(basedir, basefinaldir)
except OSError as e:
    print(e.strerror)
