import React from 'react';
import { View, Text, StyleSheet, Image,SafeAreaView, TextInput, ScrollView, ImageBackground} from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import HowButton from '../components/howBtn';
import ActionButton from '../components/actionBtn';
import { color } from 'react-native-reanimated';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
          <View style={styles.navbar}>
            <Image
              source={require('../src/Logo.png')}
            />
            <Image
              source={require('../src/navbarHelp.png')}
            />
          </View>
        </SafeAreaView>
        <View style={styles.search}>
          <TextInput
            style={styles.search__input}
            placeholder={'Поиск по артикулу, вин коду, наименованию'}
          />
          <View style={styles.search__wrapper}>
            <Image
              style={styles.search__icon}
              source={require('../src/Search.png')}
            />
          </View>            
        </View>
        <ScrollView>
          <View style={styles.how}>
            <Text h2 style={styles.how__title}>Как купить запчасти?</Text>
            <View style={styles.how__wrapper}>
              <View style={styles.how__item}>
                <Text style={styles.how__number}>1</Text>
                <Text style={styles.how__text}>Выберите свой автомобиль</Text>
              </View>
              <View style={styles.how__item}>
                <Text style={styles.how__number}>2</Text>
                <Text style={styles.how__text}>Найдите нужные запчасти</Text>
              </View>
              <View style={styles.how__item}>
                <Text style={styles.how__number}>3</Text>
                <Text style={styles.how__text}>Сделайте заказ и получите товар</Text>
              </View>                    
            </View>
            <HowButton />
          </View>
          <View style={styles.Action}>
            <Text h3 style={styles.Action__text}>Акции</Text>
            <View style={styles.Action__item}>
              <Text style={styles.Action__title}>Скидка 7% на весь каталог KAYABA</Text>
              <Image
                style={styles.action__img}
                source={require('../src/action-item.jpg')}
              />
              <Text style={styles.action__bottom}>Только до 31 мая все автозапчасти и аксессуары KAYABA по сниженным ценам.</Text>
              <ActionButton />
            </View>            
          </View>
          <View style={styles.selection__wrapper}>
            <ImageBackground
            source={require('../src/need-help_bg.jpg')}
            style={styles.selection__bg}
            >
              <Text style={styles.selection__title}>Нужна помощь в подборе запчастей?</Text>
              <Text style={styles.selection__bottom}>
                  Нужна помощь в выборе запчасти? 
                  У вас есть вопросы о покупке? Наши сотрудники помогут вам.
              </Text>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      height: 62,
      borderBottomColor: '#B8B8B8',
      borderBottomWidth: 1
    },
    search: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: '#E2000F',
      borderWidth: 1,
      marginHorizontal: 8,
      marginVertical: 13,
      height: 44
    },
    search__input: {
      paddingLeft: 12,
      width: '80%',
    },
    search__wrapper: {
      height: '100%',
      width: 44,
      backgroundColor: '#E2000F',
      justifyContent: 'center',
      alignItems: 'center'
    },
    how: {
      paddingHorizontal: 17
    },
    how__title: {
      fontWeight: '700',
      fontSize: 24,
      marginTop: 34,
    },
    how__wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
    },
    how__item: {
      width: '30%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    how__number: {
      fontWeight: '700',
      fontSize: 36,
      color: '#E2000F'
    },
    how__text: {
      textAlign: 'center'
    },
    how__btn: {
      backgroundColor: '#E2000F'
    },
    Action__text: {
      fontSize: 24,
      fontWeight: '700',
      marginLeft: 22
    },
    Action__title: {
      marginVertical: 14,
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center'
    },
    action__img: {
      width: '100%'
    },
    action__bottom: {
      marginLeft: 22,
      marginTop: 14,
      fontSize: 14,
      width: '80%'
    },
    selection__bg: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
    selection__wrapper:{
      marginTop: 35,
      marginBottom: 115
    },
    selection__title:{
      marginVertical: 14,
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      color: '#fff'      
    },
    selection__bottom: {
      marginTop: 14,
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 30
    }
  });