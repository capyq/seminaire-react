type UserRoleConfig = {
  user: ['view', 'create', 'update'];
  superAdmin: ['view', 'create', 'update', 'delete'];
};

type CreateObjectByKey = {
  [Role in keyof UserRoleConfig]: UserRoleConfig[Role];
};

type CreateObjectWithFlatArray = {
  [Role in keyof UserRoleConfig]: UserRoleConfig[Role][number];
};

type Key = keyof UserRoleConfig;

type AllRoles = {
  [Role in keyof UserRoleConfig]: UserRoleConfig[Role][number];
}[keyof UserRoleConfig];

/*{
user:['view', 'create', 'update'][0,1,2]
superAdmin:['view', 'create', 'update','delete'][0,1,2,3]
}["user"|"superadmin"]

=> ['view', 'create', 'update'][0,1,2] | ['view', 'create', 'update','delete'][0,1,2,3]

=> 'view'| 'create'| 'update'| 'view'| 'create'| 'update'| 'delete'

=> 'view'| 'create'| 'update'| 'delete'

*/

export {};
