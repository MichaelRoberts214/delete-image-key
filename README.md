# How to Use
- Get node on your computer
  - homebrew makes it easy
```
$ brew install node
```
- Clone the repository
  - GitHub cli makes it easy
```
$ git clone (repo url)
```
- Copy your `serialized_cx_data.json` into this project directory
- Use node to run `process.js`
```
$/delete-image-key node process.js
```
- `imageless_cx_data.json` is your cx data without the image key

# Bonus
If you set your `KEY_TO_DELETE` environment variable as a string, this node script will delete that key instead of `image`.
```
$/delete-image-key KEY_TO_DELETE='some key' node process.js
```
