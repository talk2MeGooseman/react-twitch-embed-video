workflow "Push, Lint, Filter, Storybook Deploy, Release" {
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
  needs = ["Install"]
  uses = "Borales/actions-yarn@master"
  args = "lint"
}

action "Filter Tag" {
  needs = "Lint"
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Build Storybook" {
  uses = "Borales/actions-yarn@master"
  args = "release-storybook"
  needs = ["Filter Tag"]
}

action "Deploy to GitHub Pages" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = ".out/"
  }
  secrets = ["GH_PAT"]
  needs = ["Build Storybook"]
}

action "Build Release" {
  uses = "Borales/actions-yarn@master"
  args = "release"
  needs = ["Filter Tag"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Build Release"]
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
