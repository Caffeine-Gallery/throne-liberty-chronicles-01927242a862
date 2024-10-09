export const idlFactory = ({ IDL }) => {
  const BlogPost = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'imageUrl' : IDL.Text,
  });
  const Weapon = IDL.Record({ 'name' : IDL.Text, 'description' : IDL.Text });
  return IDL.Service({
    'getBlogPosts' : IDL.Func([], [IDL.Vec(BlogPost)], ['query']),
    'getWeapons' : IDL.Func([], [IDL.Vec(Weapon)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
