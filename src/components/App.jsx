import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList/FriendList';
import { Transactions } from './transactions/Transactions';
import { Fragment } from 'react';

export function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
}
