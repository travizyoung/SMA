import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import Title from '../../components/Title/Title';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {horizontalScale} from '../../utils/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import {userStories, userPosts} from '../../mock/data';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}: {navigation: any}) => {
  const userStoriesPageSize = 6;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStory[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

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
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <View>
        <FlatList
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }

            setIsLoadingUserPosts(true);
            const contentToHomeend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToHomeend.length > 0) {
              setUserPostsCurrentPage(prev => prev + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToHomeend]);
            }
            setIsLoadingUserPosts(false);
          }}
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title="Let's Explore" />
                <TouchableOpacity
                  style={style.messageIcon}
                  onPress={() => {
                    navigation.navigate(Routes.Profile);
                  }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={horizontalScale(20)}
                    color="#898DAE"
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={style.userStoriesContainer}>
                <FlatList
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }

                    setIsLoadingUserStories(true);
                    const contentToHomeend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToHomeend.length > 0) {
                      setUserStoriesCurrentPage(prev => prev + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToHomeend,
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
            <View style={style.userPostContainer}>
              <UserPost {...item} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
