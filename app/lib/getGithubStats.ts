export default async function getGithubStats() {
  const url = 'https://api.github.com/repos/nicolasbrandao/portfolio-next'

  const { stargazers_count, forks_count } = await fetch(url).then((response) =>
    response.json()
  )

  return { stargazers_count, forks_count }
}
