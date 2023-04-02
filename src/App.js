import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendlist/FriendList';
import TransactionHistory from './components/transactionhistory/TransactionHistory';

import './App.scss';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

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

// Этот код импортирует 4 компонента: Profile, Statistics, FriendList и TransactionHistory
//  из соответствующих файлов компонентов.Кроме того, импортируются данные
//  из 4 разных json - файлов: user.json, data.json, friends.json и transactions.json.

// Далее определен компонент App, который возвращает корневой элемент div с 4 вложенными
// компонентами: Profile, Statistics, FriendList и TransactionHistory.

// Profile компонент получает props, содержащие данные из user.json,
// такие как аватар, имя пользователя, тег и статистику.

// Statistics компонент получает свойства title и stats, где title - это строка,
//   содержащая заголовок статистики, а stats - данные статистики из data.json.

// FriendList компонент получает props, содержащие массив объектов друзей из friends.json.

// TransactionHistory компонент получает props, содержащие массив объектов транзакций
//  из transactions.json.

// Происходит экспорт компонента App по умолчанию.
