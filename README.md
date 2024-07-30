# Masterclass Challenge

## Demo Recording
https://github.com/user-attachments/assets/3e0eabdb-7aeb-40ac-980d-361cd0e6436a



## Getting started

### Running locally

```
# Clone this repository
$ git clone git@github.com:uhayon/masterclass-challenge.git

# Go into the repository
$ cd masterclass-challenge

# Install dependencies
$ npm install
```

Make sure you set the next environment variables in .env.local file

```
API_BASE_URL=base_url_example
API_VERSION_SUFFIX=example/v1
API_USER=user@example.com
```

Run the next commands to start the app locally:
```
# Compile the app
$ npm run build

# Run the app
$ npm run start
```

## Comments
- The catalog is responsive, adapting to a few screen sizes based on Tailwind breakpoints.
- After fixing the known bugs (toast jumping before UI update), the next step would be to add a loading spinner to better give the felling of something happening on the background.
