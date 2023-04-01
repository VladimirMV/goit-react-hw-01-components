import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friendlist/FriendList";
import TransactionHistory from "./components/transactionhistory/TransactionHistory";

import "./App.scss";

import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";


function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        statistics={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}
export default App;