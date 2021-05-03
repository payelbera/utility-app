import React from 'react';
import { FlatList,StyleSheet,View } from 'react-native';

// Import getNews from news.js
import { getNews } from './src/news';
import Article from './src/components/Article';
import MyHeader from "../components/MyHeader";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (


      <View style={styles.subContainer}>
      <MyHeader title="NEWSLETTER" navigation={this.props.navigation} />

      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
              </View>

    );
  }
}

const styles = StyleSheet.create({

  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    }})