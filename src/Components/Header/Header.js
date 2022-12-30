import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const { search, setSearch } = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?name=${search}`);
    setSearch("")
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName"
          onClick={() => { history.push('/') }}
        >
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text"

          />
          <Arrow></Arrow>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
            <div className="searchAction">
              <Search color="#ffffff"></Search>
            </div>
          </div>
        </form>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcom ${user.displayName}` : ''}</span>
          <Link to='/login'>
            {!user && <span>Login</span>}
          </Link>
          <hr />
        </div>
        {user && <span onClick={() => {
          firebase.auth().signOut();
          history.push('login')
        }}>Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={() => { history.push('create') }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
