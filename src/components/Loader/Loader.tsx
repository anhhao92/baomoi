import {Image, StyleSheet, View} from 'react-native';

const Loader = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://static.znews.vn/wap/css/img/loader_dotdotdot.gif',
        cache: 'only-if-cached',
      }}
      style={styles.img}
    />
  </View>
);

const styles = StyleSheet.create({
  img: {
    width: 48,
    height: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 8,
  },
});

export default Loader;
