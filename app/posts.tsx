import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import Container from '@/components/Container';
import Divider from '@/components/Divider';
import Title from '@/components/Typography';

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
    <Container>
      <FlatList
        data={posts}
        renderItem={({ item }: PostItem) => (
          <View>
            <Title>{item.title}</Title>
            <Text>{item.body}</Text>
            <Divider />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </Container>
  );
}
