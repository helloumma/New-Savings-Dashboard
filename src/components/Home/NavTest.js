import React, { useState } from 'react'
import {
	makeStyles,
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	Switch,
	FormControlLabel,
} from '@material-ui/core'

import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faWallet,
	faBorderAll,
	faFileInvoice,
} from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames'

const themeObject = {
	palette: {
		primary: { main: '#371dca' },
		secondary: { main: '#fff' },
		type: 'light',

		contrastThreshold: 3,
		tonalOffset: 0.2,
		background: {
			default: '#FBFCFD',
		},
	},
	themeName: 'Light Theme',
}

const useDarkMode = () => {
	const [theme, setTheme] = useState(themeObject)
	const {
		palette: { type },
	} = theme

	const toggleDarkMode = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === 'light' ? 'dark' : 'light',
				background: {
					default: type === 'light' ? '#000' : '#FBFCFD',
				},
			},
		}
		setTheme(updatedTheme)
	}
	return [theme, toggleDarkMode]
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.paper,
	},

	drawerPaper: {
		background: '#371dca',
	},

	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: '#000',
		},
	},
}))

export default function MiniDrawer() {
	const classes = useStyles()

	const [open, setOpen] = React.useState(false)

	const [theme, toggleDarkMode] = useDarkMode()
	const themeConfig = createMuiTheme(theme)
	return (
		<MuiThemeProvider theme={themeConfig}>
			<CssBaseline />

			<Drawer
				variant="permanent"
				classes={{
					paper: classNames(classes.drawerPaper, {
						[classes.drawerClose]: !open,
					}),
				}}
				open={open}
			>
				<List>
					<Link to="/">
						<ListItem key="Home">
							<ListItemIcon>
								<FontAwesomeIcon
									icon={faHome}
									size="lg"
									color="white"
								/>
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItem>
					</Link>
					<Link to="/Budget">
						<ListItem key="Budget">
							<ListItemIcon>
								<FontAwesomeIcon
									icon={faWallet}
									size="lg"
									color="white"
								/>
							</ListItemIcon>
							<ListItemText primary="Budget" />
						</ListItem>
					</Link>
					<Link to="/Categories">
						<ListItem key="Categories">
							<ListItemIcon>
								<FontAwesomeIcon
									icon={faBorderAll}
									size="lg"
									color="white"
								/>
							</ListItemIcon>
							<ListItemText primary="Categories" />
						</ListItem>
					</Link>
					<Link to="/AddAccount">
						<ListItem key="AddAccount">
							<ListItemIcon>
								<FontAwesomeIcon
									icon={faFileInvoice}
									size="lg"
									color="white"
								/>
							</ListItemIcon>
							<ListItemText primary="Add Account" />
						</ListItem>
					</Link>
				</List>
				<Divider />
				<FormControlLabel
					control={<Switch onClick={toggleDarkMode} />}
				/>
			</Drawer>
		</MuiThemeProvider>
	)
}
