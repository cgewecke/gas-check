#!/usr/bin/env bash

# Executes cleanup function at script exit.
trap cleanup EXIT

# Load helpers
source ./scripts/integration_tests.sh
source ./scripts/launch_testrpc.sh

# -----------------------  Conditional TestRPC Launch on 8545 ---------------------------------------

if testrpc_running; then
  echo "Using existing client instance"
else
  echo "Starting our own ganache-cli instance"
  start_testrpc
fi

# Buidler is super fast on launch
sleep 5

# -----------------------------------  Run tests ---------------------------------------------------
test_truffle_v5_basic

