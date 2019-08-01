workflow "Push, Install, Lint, Deploy" {
  resolves = [
    "Deploy to GitHub Pages",
    "GitHub Action for npm",
  ]
  on = "push"
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

action "Tag" {
  needs = "Filter Master"
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Build Release" {
  uses = "Borales/actions-yarn@master"
  needs = "Tag"
  args = "release"
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Build Release"]
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
