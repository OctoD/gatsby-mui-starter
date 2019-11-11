import React from "react"
import Seo from "../components/Seo"
import { Typography } from "@material-ui/core"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Typography variant="h1">Not found</Typography>
    <Typography variant="body1">
      You just hit a page that doesn&#39;t exist... the sadness.
    </Typography>
  </>
)

export default NotFoundPage
