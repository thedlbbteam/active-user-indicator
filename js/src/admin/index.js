import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import UserListPage from 'flarum/admin/components/UserListPage';

app.initializers.add('dlbb/active-user-indicator', () => {
  extend(UserListPage.prototype, 'columns', function (items) {
    items.add(
      'activeStatus',
      {
        name: app.translator.trans('dlbb-active-user-indicator.admin.activeUI'),
        content: (user) => {
          // Retrieve core boolean data tracking confirmed statuses in Flarum 2.x
          const isEmailConfirmed = user.attribute('isEmailConfirmed');

          if (isEmailConfirmed) {
            return (
              <span className="Badge UserList-isActive">
                {app.translator.trans('dlbb-active-user-indicator.admin.active')}
              </span>
            );
          }

          return (
            <span className="Badge UserList-notActive">
              {app.translator.trans('dlbb-active-user-indicator.admin.notActive')}
            </span>
          );
        },
      },
      30
    );
  });
});