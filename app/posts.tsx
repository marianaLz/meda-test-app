import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type PostItem = {
  item: Post;
};

export default function PostsScreen() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        style={styles.list}
        renderItem={({ item }: PostItem) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
            <View
              style={styles.separator}
              lightColor='#eee'
              darkColor='rgba(255,255,255,0.1)'
            />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  separator: {
    marginTop: 20,
    height: 1,
    width: '100%',
  },
});
