import React, { Component } from 'react';

import { Layout } from 'antd';
import { List, Card } from 'antd';

const { Header, Content } = Layout;

const GITHUB_URL = "https://api.github.com";

function getLanguages(user: string, repository: string) {
    return fetch(
        `${GITHUB_URL}/repos/${user}/${repository}/languages`
    ).then(response => response.json());
}

class LanguagesList extends Component {
    _isMounted = false;

    state = {
        languages: {},
    };

    componentDidMount() {
        this._isMounted = true;
        getLanguages('facebook', 'react').then(languages => {
            if (this._isMounted) {
                this.setState({
                    languages,
                })
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { languages } = this.state;
        return (
            <div className="App">
                <Layout>
                    <Header>
                    </Header>
                    <Content style={{ padding: '0 100px', margin: 64 }}>
                        <h2>Lists languages in /facebook/react/ repository:</h2>
                        <p>Credit: https://developer.github.com/v3/repos/#list-languages</p>
                        <List grid={{ gutter: 2, column: 3 }}>
                            {Object.entries(languages).map(([language, bytes]) => (
                                <List.Item key={language}>
                                    <Card title={language}>{bytes} bytes</Card>
                                </List.Item>
                            ))}
                        </List>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default LanguagesList;