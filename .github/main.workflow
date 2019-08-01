workflow "Push, Install, Lint, Deploy" {
  resolves = ["Deploy to GitHub Pages"]
  on = "push"
}

workflow "Pull Request, Lint, Deploy" {
  on = "pull_request"
  resolves = ["Build Storybook"]
}

action "Install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "Lint" {
  needs = "Install"
  uses = "Borales/actions-yarn@master"
  args = "lint"
}

action "Filter Master" {
  needs = "Lint"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Build Storybook" {
  needs = "Filter Master"
  uses = "Borales/actions-yarn@master"
  args = "release-storybook"
}

action "Deploy to GitHub Pages" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = ".out/"
  }
  secrets = ["GH_PAT"]
  needs = ["Build Storybook"]
}
