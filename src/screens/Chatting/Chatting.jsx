import Message from '@/components/features/Chatting/Message';
import {Mom_profile} from '@/components/icon/Mom_profile';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Chatting() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Mom_profile />
          <Message message="그래, 멋진 아들" color="white" />
        </View>
        <View>
          <Message message="공주 스냅샷 찍은거 보니까 맛있는거 먹네." color="blue" />
        </View>
        <View>
          <Mom_profile />
          <Message message="그러게요 ㅋㅋㅋㅋㅋ" color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  me: {

  }
})
