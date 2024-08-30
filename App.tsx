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
import UserPost from './components/UserPost/UserPost';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import {horizontalScale} from './utils/scaling';

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
  const userStoriesPageSize = 6;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStory[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPosts: UserPost[] = [
    {
      firstName: 'Joseph',
      lastName: 'Smith',
      id: 1,
      likes: 0,
      comments: 0,
      bookmarks: 0,
      location: 'San Diego, CA',
      image: require('./assets/images/default_post.png'),
    },
    {
      firstName: 'Tom',
      lastName: 'Smith',
      id: 2,
      likes: 0,
      comments: 0,
      bookmarks: 0,
      location: 'San Diego, CA',
      image: require('./assets/images/default_post.png'),
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      id: 3,
      likes: 0,
      comments: 0,
      bookmarks: 0,
      location: 'San Diego, CA',
      image: require('./assets/images/default_post.png'),
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      id: 4,
      likes: 0,
      comments: 0,
      bookmarks: 0,
      location: 'San Diego, CA',
      image: require('./assets/images/default_post.png'),
    },
    {
      firstName: 'Mark',
      lastName: 'Smith',
      id: 5,
      likes: 0,
      comments: 0,
      bookmarks: 0,
      location: 'San Diego, CA',
      image: require('./assets/images/default_post.png'),
    },
    {
      firstName: 'Sarah',
      lastName: 'Smith',
      id: 6,
      likes: 0,
      comments: 0,
      bookmarks: 0,
      location: 'San Diego, CA',
      image: require('./assets/images/default_post.png'),
    },
  ];
  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<
    UserPost[]
  >([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
  const pagination = (
    database: any[],
    currentPage: number,
    pageSize: number,
  ): any[] => {
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

  useEffect(() => {
    setIsLoadingUserPosts(true);
    const getInitialData = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialData);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }

            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(prev => prev + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title="Let's Explore" />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={horizontalScale(20)}
                    color="#898DAE"
                  />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={globalStyle.userStoriesContainer}>
                <FlatList
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
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={userStoriesRenderedData}
                  renderItem={({item}) => <UserStory key={item.id} {...item} />}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          renderItem={({item}) => (
            <View style={globalStyle.userPostContainer}>
              <UserPost {...item} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
