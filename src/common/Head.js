import { Text, View, StyleSheet } from 'react-native';
 
// สร้าง Component
class Head extends Component {
  //const { textStyle, viewStyle } = styles;
  render() {
    return (
        <View style={styles.view}>
        <Text style={styles.text}> { this.props.text } </Text>
        </View>
    );
  }
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
      },
      text: {
        fontSize: 20
      },
  });
 
// เปิดทางให้ component ตัวอื่นๆ สามารถนำ component ตัวนี้ ไปใช้งานได้
export { Head };