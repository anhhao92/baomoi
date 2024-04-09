import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useGetLatestArticlesQuery} from '../../redux/service';
import Article from './Article';
import Loader from '../../components/Loader/Loader';

function ListingArticle() {
  const [page, setPage] = useState(1);
  const {data, isFetching} = useGetLatestArticlesQuery(page);
  const loadMore = () => {
    if (!isFetching) {
      setPage(p => p + 1);
    }
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, idx) => item.id + idx}
        renderItem={({item}) => <Article data={item} />}
        onEndReached={loadMore}
        ListFooterComponent={isFetching ? <Loader /> : null}
      />
    </View>
  );
}

export default ListingArticle;
