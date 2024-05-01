import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImagePath} from '../../../ImageConstant';
import {Colors} from '../../../Constants/Constant';
import CustomButton from '../../Auth/CommonComponents/CustomButton';
import Heart from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';

interface HotelCard {
  Title: String;
  address: String;
  ImageName: any;
  ifSale: boolean;
  star: String;
  food: String;
  dollar: String;
  calendar: String;
}

const {height, width} = Dimensions.get('screen');
const SaleCard = ({
  Title,
  address,
  ImageName,
  ifSale,
  star,
  food,
  dollar,
  calendar,
}: HotelCard) => {
  const ClickHandle = () => {};
  const [touched, setTouched] = useState(false);
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.leftCurve} />
      <View style={Styles.rightCurve} />
      <View style={Styles.subContainer}>
        <TouchableOpacity
          onPress={() => {
            setTouched(!touched);
          }}
          style={{position: 'absolute', zIndex: 10, right: 0, padding: 10}}>
          <Heart
            name={touched ? 'heart' : 'heart-o'}
            size={25}
            color={touched ? '#e31b23' : '#FFFFFF'}
          />
        </TouchableOpacity>
        <Image
          resizeMode="stretch"
          source={ImageName}
          style={Styles.largeImage}
        />
        <Image
          source={ifSale ? ImagePath.SaleOn : ImagePath.Sold}
          style={Styles.cornerImage}
        />
        <View style={Styles.textContainer}>
          <Text style={Styles.textHead}>{Title}</Text>
          <View style={{flexDirection: 'row', width: height * 0.38}}>
            <View style={{flexDirection: 'column', width: '50%'}}>
              <View style={Styles.subTextContainer}>
                <Image
                  source={ImagePath.Star}
                  style={Styles.mapImageContainer}
                  resizeMode="contain"
                />
                <Text style={Styles.subText}>{star}</Text>
              </View>
              <View style={Styles.addressContainer}>
                <Image
                  source={ImagePath.Map}
                  style={Styles.mapImageContainer}
                  resizeMode="contain"
                />
                <Text style={Styles.subText}>{address}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'column', width: '50%'}}>
              <View style={Styles.subTextContainer}>
                <Image
                  source={ImagePath.Food}
                  style={Styles.mapImageContainer}
                  resizeMode="contain"
                />
                <Text style={Styles.subText}>{food}</Text>
              </View>
              <View style={Styles.addressContainer}>
                <Image
                  source={ImagePath.Doller}
                  style={Styles.mapImageContainer}
                  resizeMode="contain"
                />
                <Text style={Styles.subText}>{dollar}</Text>
              </View>
              <View style={Styles.addressContainer}>
                <Image
                  source={ImagePath.Calendar}
                  style={Styles.mapImageContainer}
                  resizeMode="contain"
                />
                <Text style={Styles.subText}>{calendar}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.dashViewContainer}>
          <View style={Styles.dashViewSubContainer}>
            <View style={Styles.dashViewSubContainer2}>
              <View style={Styles.dashView} />
            </View>
          </View>
        </View>
        {/* <Text style={{color: '#4CAF74', fontWeight: 'bold', fontSize: 20, position: 'absolute', zIndex: 10, marginLeft: 20}}>4</Text> */}
        <View style={Styles.BottomButtonContainer}>
          <CustomButton
            label={'VIEW'}
            onClick={ClickHandle}
            style={{width: height * 0.15}}
          />
        </View>
      </View>
    </View>
  );
};

export default SaleCard;

const Styles = StyleSheet.create({
  mainContainer: {
    width: width,
    alignItems: 'center',
    marginTop: height * 0.02,
    justifyContent: 'center',
  },
  leftCurve: {
    height: 28,
    width: 28,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    position: 'absolute',
    zIndex: 10,
    left: 10,
    bottom: height * 0.062,
    backgroundColor: '#F4F5F7',
  },
  rightCurve: {
    height: 28,
    width: 28,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    position: 'absolute',
    zIndex: 10,
    right: 10,
    bottom: height * 0.062,
    backgroundColor: '#F4F5F7',
  },
  subContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  largeImage: {
    width: height * 0.4,
    height: height * 0.17,
  },
  textContainer: {
    padding: 10,
  },
  textHead: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTextContainer: {
    flexDirection: 'row',
    marginVertical: height * 0.01,
    alignItems: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    marginVertical: height * 0.008,
  },
  mapImageContainer: {
    width: 20,
    height: 20,
    // marginVertical: 10,
  },
  subText: {
    color: Colors.Grey,
    // width: height * 0.33,
    marginLeft: height * 0.01,
    width: '75%',
    fontSize: 14
  },
  dashViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashViewSubContainer: {
    overflow: 'hidden',
    marginLeft: 30,
  },
  dashViewSubContainer2: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Colors.Grey,
    margin: -2,
    marginTop: 10,
  },
  dashView: {
    height: 10,
    width: 280,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  bottomSubContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  BottomImageContainer: {
    width: 40,
    height: 40,
  },
  bottomImageContainer2: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  BottomButtonContainer: {
    marginRight: 15,
    width: height * 0.38,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  cornerImage: {
    position: 'absolute',
    width: height * 0.07,
    height: height * 0.07,
    top: 0,
    left: 0,
  },
});
