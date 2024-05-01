import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueWrapper from '../../Auth/CommonComponents/BlueWrapper';
import otjtr from '../../../Assets/OtpLogo.png';
import Wallet from 'react-native-vector-icons/Ionicons';
import Search from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../Constants/Constant';
import React, {useEffect, useRef, useState} from 'react';
import {ScrollArray} from '../Constants';
import WhiteWrapper from '../../Auth/CommonComponents/WhiteWrapper';
import CustomButton from '../../Auth/CommonComponents/CustomButton';
import SaleCard from '../Components/SaleCard';
import {ImagePath} from '../../../ImageConstant';

const MyWaits = () => {
  const {height, width} = Dimensions.get('screen');
  const FlatRef = React.useRef(null);
  const [String, SetString] = useState('');
  const [selectedButton, setSelectedButton] = useState(0);

  const CurrentIndex = useRef(0);

  const textHandle = (text: String) => {
    SetString(text);
  };

  useEffect(() => {
    const ScrollComponent = () => {
      setTimeout(() => {
        if (CurrentIndex.current == 2) {
          FlatRef.current?.scrollToIndex({index: 0, animation: true});
          CurrentIndex.current = 0;
        } else {
          FlatRef.current?.scrollToIndex({
            index: CurrentIndex.current + 1,
            animation: true,
          });
          CurrentIndex.current = CurrentIndex.current + 1;
        }
        if (String.length === 0) {
          ScrollComponent();
        } else {
          CurrentIndex.current = 0;
        }
      }, 2000);
    };
    if (String.length === 0) {
      ScrollComponent();
    }
  }, [String]);

  const clickHandle = (val: number) => {
    setSelectedButton(val);
  };

  return (
    <View style={Styles.mainContainer}>
      <BlueWrapper>
        <View style={Styles.ImageWrapper}>
          <Image
            source={otjtr}
            style={[
              Styles.ImageStyle,
              Platform.OS === 'ios'
                ? {marginTop: height * 0.08}
                : {marginTop: height * 0.04},
            ]}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={
              Platform.OS == 'ios'
                ? {marginTop: height * 0.1}
                : {marginTop: height * 0.06}
            }>
            <Text style={Styles.getLocation}>Click me to get location</Text>
          </TouchableOpacity>
          <View
            style={[
              Styles.walletContainer,
              Platform.OS === 'ios'
                ? {marginTop: height * 0.095}
                : {marginTop: height * 0.05},
            ]}>
            <TouchableOpacity>
              <Wallet
                name="wallet-outline"
                color="#FFFFFF"
                size={28}
                style={Styles.walletIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Bell name="bell-outline" color={Colors.White} size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.searchMainContainer}>
          <View style={Styles.searchContainer}>
            <View style={Styles.scrollContainer}>
              <TextInput
                placeholder="search for"
                placeholderTextColor={'#FFFFFF'}
                onChangeText={textHandle}
                value={String}
              />
              {String.length == 0 && (
                <View style={{height: height * 0.03, width: height * 0.13}}>
                  <FlatList
                    data={ScrollArray}
                    renderItem={({item, index}) => {
                      return (
                        <View style={{padding: 5}}>
                          <Text style={{color: Colors.White}}>{item}</Text>
                        </View>
                      );
                    }}
                    showsVerticalScrollIndicator={false}
                    ref={FlatRef}
                    keyExtractor={item => item}
                    onScrollToIndexFailed={info => {
                      const wait = new Promise(resolve =>
                        setTimeout(resolve, 500),
                      );
                      wait.then(() => {
                        FlatRef.current?.scrollToIndex({
                          index: info.index,
                          animated: true,
                        });
                      });
                    }}
                  />
                </View>
              )}
            </View>
            <TouchableOpacity>
              <Search name="search1" color={'#FFFFFF'} size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Calendar name="calendar-outline" color={'#FFFFFF'} size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Search name="filter" color={'#FFFFFF'} size={28} />
          </TouchableOpacity>
        </View>
      </BlueWrapper>
      <WhiteWrapper>
        <View style={Styles.mainWhiteContainer}>
          <ScrollView contentContainerStyle={Styles.mainWhiteContainer}>
            <View style={Styles.subWhiteContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <CustomButton
                  label={'SALE'}
                  textStyle={
                    selectedButton === 0 ? Colors.White : Colors.SkyBlue
                  }
                  style={
                    selectedButton === 0
                      ? Styles.selectedStyle
                      : Styles.unselectedStyle
                  }
                  onClick={() => {
                    clickHandle(0);
                  }}
                />
                <CustomButton
                  label={'PURCHASED'}
                  textStyle={
                    selectedButton === 1 ? Colors.White : Colors.SkyBlue
                  }
                  style={
                    selectedButton === 1
                      ? Styles.selectedStyle
                      : Styles.unselectedStyle
                  }
                  onClick={() => {
                    clickHandle(1);
                  }}
                />
                <CustomButton
                  label={'REQUST'}
                  textStyle={
                    selectedButton === 2 ? Colors.White : Colors.SkyBlue
                  }
                  style={
                    selectedButton === 2
                      ? Styles.selectedStyle
                      : Styles.unselectedStyle
                  }
                  onClick={() => {
                    clickHandle(2);
                  }}
                />
              </View>
            </View>
            <SaleCard
              Title={'Parallax Restaurant'}
              ImageName={ImagePath.Girl}
              ifSale={true}
              address={'4814 Bingamon Road Warrensville Heights, OH 44128'}
              star={'5.0'}
              food={'8'}
              dollar={'$50.00'}
              calendar={'08:00PM - Sep 01, 2022'}
            />
            <SaleCard
              Title={'Parallax Restaurant'}
              ImageName={ImagePath.Chair}
              ifSale={true}
              address={'4814 Bingamon Road Warrensville Heights, OH 44128'}
              star={'5.0'}
              food={'8'}
              dollar={'$50.00'}
              calendar={'08:00PM - Sep 01, 2022'}
            />
          </ScrollView>
        </View>
      </WhiteWrapper>
    </View>
  );
};

export default MyWaits;

const Styles = StyleSheet.create({
  mainContainer: {flex: 1},
  ImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  ImageStyle: {width: 50, height: 50},
  getLocation: {color: 'white', fontWeight: 'bold'},
  walletContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  walletIcon: {marginRight: 20},
  searchContainer: {
    flexDirection: 'row',
    width: '70%',
    padding: Platform.OS === 'ios' ? 12 : 0,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchMainContainer: {
    marginTop: Platform.OS === 'ios' ? 15 : 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  mainWhiteContainer: {
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subWhiteContainer: {
    width: '96%',
    marginTop: 20,
  },
  selectedStyle: {
    backgroundColor: Colors.SkyBlue,
    width: '31%',
  },
  unselectedStyle: {
    backgroundColor: Colors.White,
    width: '31%',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
