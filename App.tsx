import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import UserStory from './components/UserStory/UserStory';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';

const App = () => {
  const userStories: UserStory[] = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Tom',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'John',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jane',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Mark',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Sarah',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Emily',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Michael',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStory[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (
    database: UserStory[],
    currentPage: number,
    pageSize: number,
  ): UserStory[] => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="#898DAE" />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={globalStyle.userStoriesContainer}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserStories) {
              return;
            }

            setIsLoadingUserStories(true);
            const contentToAppend = pagination(
              userStories,
              userStoriesCurrentPage + 1,
              userStoriesPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserStoriesCurrentPage(prev => prev + 1);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false);
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={userStoriesRenderedData}
          renderItem={({item}) => <UserStory key={item.id} {...item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
