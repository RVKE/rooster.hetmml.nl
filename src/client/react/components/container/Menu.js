/**
 * Copyright (C) 2018 Noah Loomans
 *
 * This file is part of rooster.hetmml.nl.
 *
 * rooster.hetmml.nl is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * rooster.hetmml.nl is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with rooster.hetmml.nl.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeSetUser, userFromMatch } from '../../lib/url';

import Menu from '../presentational/Menu';

const mapStateToProps = (state, { match, location, history }) => ({
  user: userFromMatch(match),
  setUser: makeSetUser(location, history),
});

const mapDispatchToProps = dispatch => ({
  showRoomFinder: () => dispatch({ type: 'ROOM_FINDER/SHOW' }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
