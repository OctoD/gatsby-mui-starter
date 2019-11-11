import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Theme } from "@material-ui/core"

export interface IHeaderProps {
  siteTitle?: string
}

const useCss = makeStyles((theme: Theme) => ({
  link: {
    color: theme.palette.background.default,
    textDecoration: "none",
  },
}))

export default function Header(props: IHeaderProps) {
  const classes = useCss(props)

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography component="h1" variant="h6">
          <Link className={classes.link} to="/">
            {props.siteTitle}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
