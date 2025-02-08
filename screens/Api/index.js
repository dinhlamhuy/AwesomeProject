/* eslint-disable no-shadow */
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import tw from 'twrnc';
import axios from 'axios';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';

const Api = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
  );
  //   const [status, setStatus] = useState(false);
  useEffect(() => {
    const callApi = async () => {
      const baseUrl = 'http://192.168.30.116:8084/sanluong/sanluongLine';
      await axios
        .get(baseUrl)
        .then(response => {
          setData(response.data.data);

          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    };

    callApi();
  }, []);
  const from = itemsPerPage && page * itemsPerPage;
  const to = itemsPerPage && Math.min((page + 1) * itemsPerPage, data.length);

  React.useEffect(() => {
    if (itemsPerPage) {
      setPage(0);
    }
  }, [itemsPerPage]);

  return (
    <View style={tw`flex-1 bg-blue-600  content-between`}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start p-2 `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon style={tw`text-white `} />
          </TouchableOpacity>
          <View style={tw`text-white flex  justify-center pl-1`}>
            <Text style={tw`text-white font-bold`}>API METHOD GET</Text>
          </View>
        </View>
      </SafeAreaView>
      <View>
        <View
          style={tw`bg-white  mt-4 h-[96%]  rounded-lg px-2 flex justify-around items-center content-around`}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <ScrollView style={tw`text-white w-[100%] `}>
              <ScrollView style={tw`text-white w-[100%]`} horizontal>
                <DataTable style={tw`pb-6 table-fixed`}>
                  <DataTable.Header style={tw` table-fixed`}>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-18 justify-center`}>
                      <Text>Line</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_8</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_9</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_10</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_11</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_12</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_13</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_14</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_15</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-16 justify-center`}>
                      <Text>Hour_16</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-24 justify-center`}>
                      <Text>InDirect</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-24 justify-center`}>
                      <Text>Today_Absent</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-24 justify-center`}>
                      <Text>Total_Member</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-24 justify-center`}>
                      <Text>Today_member</Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={tw`px-2 flex-1 w-24 justify-center`}>
                      <Text>TARGET</Text>
                    </DataTable.Title>
                  </DataTable.Header>

                  {data && data.length > 0 ? (
                    data.slice(from, to).map((item, index) => (
                      <DataTable.Row style={tw` w-[100%]`} key={index}>
                        <DataTable.Cell style={tw`px-2 flex-1 w-18`}>
                          <Text>{item.line}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16 `} numeric>
                          <Text>{item.Hour_8}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16`} numeric>
                          <Text>{item.Hour_9}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16`} numeric>
                          <Text>{item.Hour_10}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16`} numeric>
                          <Text>{item.Hour_11}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16`} numeric>
                          <Text>{item.Hour_12}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16`} numeric>
                          <Text>{item.Hour_13}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16`} numeric>
                          <Text>{item.Hour_14}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16`} numeric>
                          <Text>{item.Hour_15}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-16`} numeric>
                          <Text>{item.Hour_16}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-24`} numeric>
                          <Text>{item.InDirect}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-24`} numeric>
                          <Text>{item.Today_Absent}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-24`} numeric>
                          <Text>{item.Total_Member}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-24`} numeric>
                          <Text>{item.Today_member}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={tw`px-2 flex-1 w-24`} numeric>
                          <Text>{item.TARGET}</Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))
                  ) : (
                    <DataTable.Row>
                      <DataTable.Cell style={tw`border`}>
                        No data available
                      </DataTable.Cell>
                    </DataTable.Row>
                  )}
                  <DataTable.Pagination
                    page={page}
                    style={tw`justify-center`}
                    numberOfPages={Math.ceil(data.length / itemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${data.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                  />
                </DataTable>
              </ScrollView>
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

export default Api;
