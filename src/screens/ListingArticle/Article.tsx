import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import type {Article} from '../../types/article';
import {useNavigation} from '@react-navigation/native';

type ArticleProps = {
  data: Article;
};

function Article({data}: ArticleProps) {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('Details', {link: data.link});

  return (
    <TouchableOpacity onPress={onPress}>
      <View testID="article" style={styles.container}>
        <Image style={styles.image} source={{uri: data.thumb}} />
        <View style={styles.desc}>
          <Text style={styles.textTitle}>{data.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    columnGap: 8,
  },
  image: {
    flex: 0.35,
    height: 100,
    borderRadius: 4,
  },
  desc: {
    flex: 0.65,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Article;
