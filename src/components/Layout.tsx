import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MuiThemeProvider, makeStyles, Theme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import Header from "./Header"
import theme from "../theme"
import Container from "@material-ui/core/Container"
import Footer from "./Footer"

export interface ILayoutProps {
  children: React.ReactNode
}

const useCss = makeStyles((theme: Theme) => ({
  main: {
    marginTop: theme.spacing(2),
    minHeight: "100vh",
  },
}))

function Layout(props: ILayoutProps) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = useCss(props)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main className={classes.main}>{props.children}</main>
        <Footer />
      </Container>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
