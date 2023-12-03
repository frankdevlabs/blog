# Frank's Blog (my personal blog)

My [personal blog](https://franksblog.nl) is a dynamic, structured content platform powered by Sanity.io.

## Quick Start

To get started with Frank's Blog:

1. **Clone this repository**: Obtain a local copy of the project.
2. **Install Dependencies**: Run `npm install` in the project's root folder.
3. **Start the Application**:
- Run `npm run dev` to start both the studio and frontend locally.
- The studio will be available at `http://localhost:3333`.
- The frontend will be accessible at `http://localhost:8000`.
4. **Local Production Build**: Use `npm run build` for a local production build.

## Real-time Content Preview in Development

To enable this feature:
1. Create a token with read rights at your project’s API settings on manage.sanity.io.
2. Rename `.env.development.template` to `.env.development` and include your token as `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server using `ctrl + C` and `npm run dev`.

*Note: Adjust `watchMode` and `overlayDrafts` in `gatsby-config.js` for different preview behaviors.*

## Deployment

The blog is configured for automatic deployment via Netlify. Changes committed to the master branch on GitHub trigger deployment. Modify deployment settings on Netlify if needed.
