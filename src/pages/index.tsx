import Seo from "@components/Seo"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import React from "react"

export default function IndexPage() {
  return (
    <>
      <Seo title="Home" />
      <Typography align="center" gutterBottom variant="h1">
        Hi people
      </Typography>
      <Typography align="center" gutterBottom variant="body1">
        Welcome to your new Gatsby site.
      </Typography>
      <Typography align="center" gutterBottom variant="body2">
        Now go build something great.
      </Typography>
      <Typography align="center" variant="body2">
        <Link to="/page-2/">Go to page 2</Link>
      </Typography>
    </>
  )
}
