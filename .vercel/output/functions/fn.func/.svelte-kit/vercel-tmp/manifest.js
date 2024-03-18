export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/Color=Gray.svg","icons/captioncrew.svg","icons/docker.svg","icons/elixir.svg","icons/git.svg","icons/github-actions.svg","icons/github.svg","icons/github_logo.svg","icons/githubsmall.svg","icons/js.svg","icons/jsblack.svg","icons/jswhite.svg","icons/kubernetes.svg","icons/linkedin.svg","icons/medium.svg","icons/node.svg","icons/phoenix.svg","icons/postgres.svg","icons/postgres_logo.svg","icons/soundlift.svg","icons/svelte.svg","icons/tailwind.svg","icons/vercel.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CAOq85j8.js","app":"_app/immutable/entry/app.BGoon3Nj.js","imports":["_app/immutable/entry/start.CAOq85j8.js","_app/immutable/chunks/entry.DhgnhRnc.js","_app/immutable/chunks/scheduler.B-4f9cya.js","_app/immutable/entry/app.BGoon3Nj.js","_app/immutable/chunks/scheduler.B-4f9cya.js","_app/immutable/chunks/index.Ds_-34h8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects/caption-crew",
				pattern: /^\/projects\/caption-crew\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/soundlift",
				pattern: /^\/projects\/soundlift\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/tonex",
				pattern: /^\/projects\/tonex\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/tuner",
				pattern: /^\/projects\/tuner\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tech/data",
				pattern: /^\/tech\/data\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/tech/elixir",
				pattern: /^\/tech\/elixir\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/tech/js",
				pattern: /^\/tech\/js\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
