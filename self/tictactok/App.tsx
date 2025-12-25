import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [result,setResult]=useState('')
  const [playerValue, setPlayerValue] = useState('O');
  const [position,setPostion] = useState(Array(9).fill('empty'))
  // position.push("X")
  // let position = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const handleReset=()=>{
    setResult('')
    setPlayerValue('O')
    setPostion(Array(9).fill('empty'))
  }
  const handleClick = (index) => {
    
    if (position[index] !== 'empty') return;

    let newArray = [...position]
  
    if (playerValue === 'empty') {
      newArray[index]='O'
      setPostion(newArray)
      setPlayerValue('O');
      console.log("check")
     

    }

    if (playerValue === 'X') {
     
      newArray[index]='X'
      setPostion(newArray)
      setPlayerValue('O');

   
    }
    if (playerValue === 'O') {
      newArray[index]='O'
      setPostion(newArray)
      setPlayerValue('X');

      
    }

    
  };

  // check wining logic

  const checkWin=()=>{
    let result
    // 1 row
    if(position[0]!== 'empty' && position[0]===position[1] && position[1]===position[2]){
      return result = `${position[1]} is won`
    }
    // 2 row
    if(position[3]!== 'empty' && position[3]===position[4] && position[4]===position[5]){
      return result = `${position[3]} is won`
    }

    // 3 row

    if(position[6] !== 'empty' && position[6]===position[7] && position[7] === position[8]){
      return result = `${position[7]} is won`
    }

    //column 1

    if(position[0] !== 'empty' && position[0]===position[3] && position[3]===position[6]){
      return result = `${position[3]} is won`
    }

    // column 2

    if(position[1] !== 'empty' && position[1]=== position[4] && position[4]===position[7] ){
      return result = `${position[4]} is won`
    
    }

    // column 3
    if(position[2] !== 'empty' && position[2]==position[5] && position[5]===position[8]){
      return result = `${position[5]} is won`
    }

    // cross left site

    if(position[0] !== 'empty' && position[0]===position[4] && position[4]===position[8]){
      return `${position[4]} is won`
    }

    // cross right site

    if(position[2] !== 'empty' && position[2]===position[4] && position[4]===position[6]){
      return `${position[4]} is won`
    }
    
  }

  useEffect(() => {
    const win = checkWin();
    if(win){
      setResult(win)
    }
  }, [position]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Text style={styles.title}>{result}</Text>

      <View style={styles.container}>
        <View style={styles.box}>
          {/* Row 1 */}
          <View style={styles.boxItems}>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} style={styles.touchable} onPress={()=>handleClick(0)}>
               
                <Text>{position[0]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} onPress={()=>handleClick(1)}>
                <Text>{position[1]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} onPress={()=>handleClick(2)}>
                <Text>{position[2]}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Row 2 */}
          <View style={styles.boxItems}>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} onPress={()=>handleClick(3)}>
                <Text>{position[3]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} onPress={()=>handleClick(4)}>
                <Text>{position[4]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} onPress={()=>handleClick(5)}>
                <Text>{position[5]}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Row 3 */}
          <View style={styles.boxItems}>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} onPress={()=>handleClick(6)}>
                <Text>{position[6]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} onPress={()=>handleClick(7)}>
                <Text>{position[7]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxItem}>
              <TouchableOpacity disabled={result?true:false} onPress={()=>handleClick(8)}>
                <Text>{position[8]}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
<TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
  <Text style={styles.resetText}>Reset Game</Text>
</TouchableOpacity>
      </View>
      

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'column',
  },
  boxItems: {
    flexDirection: 'row',
  },
  boxItem: {
    width: 70,
    height: 70,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

resetBtn: {
  marginTop: 20,
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: '#333',
  borderRadius: 6,
},

resetText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},


});
