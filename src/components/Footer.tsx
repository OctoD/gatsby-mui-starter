import React from "react"
import Typography from "@material-ui/core/Typography"

export interface IFooterProps {}

export default function Footer() {
  return (
    <footer>
      <Typography align="center" variant="body2">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank">
          Gatsby
        </a>
        {` and `}
        <a href="https://www.material-ui.com" target="_blank">
          Material-ui
        </a>
      </Typography>
      <Typography align="center" variant="body2">
        template brought to you by
        {` `}
        <a href="https://github.com/octod/gatsby-mui-starter" target="_blank">
          OctoD
        </a>
      </Typography>
    </footer>
  )
}
