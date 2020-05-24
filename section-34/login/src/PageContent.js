import React, { Component } from 'react'
import { ThemeContext } from './context/ThemeContext'

export default class PageContent extends Component {
    static contextType = ThemeContext;
    render() {
        const {isDarkMode} = this.context;
        const styles = {
            backgroundColor: isDarkMode ? 'black' : 'white',
            height: '100vh',
            width: '100vw'
        }
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        )
    }
}
