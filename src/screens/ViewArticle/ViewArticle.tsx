import React from 'react';
import {WebView} from 'react-native-webview';
import type {DetailsScreenProps} from '../../types/navigation';

function ViewArticle({route}: DetailsScreenProps) {
  return (
    <WebView
      testID="webview"
      source={{uri: route.params.link}}
      style={{flex: 1}}
    />
  );
}

export default ViewArticle;
