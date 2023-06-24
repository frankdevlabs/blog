/*
    We are loading all fonts locally instead of the Google CDN as described here:
    https://www.gatsbyjs.com/blog/how-to-add-custom-fonts-to-gatsby

    Current fonts:
    - Ubuntu: 300,400,500,700 (http://google-webfonts-helper.herokuapp.comubuntu?subsets=latin)
    - Raleway:300,400,400i,700 (http://google-webfonts-helper.herokuapp.com/fonts/raleway?subsets=latin)

    Fonts are locally stored in the 'static/fonts' folder.
 */

/* ubuntu-300 - latin */
export const FONTS = `
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/ubuntu-v20-latin-300.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/ubuntu-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* ubuntu-regular - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/ubuntu-v20-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/ubuntu-v20-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* ubuntu-500 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/ubuntu-v20-latin-500.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/ubuntu-v20-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* ubuntu-700 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/ubuntu-v20-latin-700.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/ubuntu-v20-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* raleway-300 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/raleway-v28-latin-300.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/raleway-v28-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* raleway-regular - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/raleway-v28-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/raleway-v28-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* raleway-700 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/raleway-v28-latin-700.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/raleway-v28-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* raleway-italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/raleway-v28-latin-italic.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/raleway-v28-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;