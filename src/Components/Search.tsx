import SearchIco from '../Assets/Svg/search.svg';
import CloseIco from '../Assets/Svg/close-outline.svg';

import React, {useEffect, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {fontPixel, widthPixel} from '../Utils/Scale';

interface Props {
  onChange: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  placeHolder?: string;
}

const Search = ({onChange, style, placeHolder}: Props) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    onChange(search);
  }, [search]);

  return (
    <View style={[styles.container, style]}>
      <SearchIco width={widthPixel(20)} height={widthPixel(20)} />
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder={placeHolder}
        style={styles.input}
        returnKeyType="done"
      />
      {search ? (
        <TouchableOpacity style={styles.closeBtn} onPress={() => setSearch('')}>
          <CloseIco width={widthPixel(20)} height={widthPixel(20)} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderRadius: 12,
  },
  closeBtn: {
    padding: 1,
  },
  input: {
    flex: 1,
    padding: 2,
    fontFamily: 'Rubik',
    fontSize: fontPixel(15),
    marginHorizontal: widthPixel(10),
  },
});
