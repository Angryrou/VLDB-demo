# Introductions for constructing a configuration file

For the demo, we are going to choose 3 workloads for streaming jobs and 3 workloads for batch jobs.

## Overview
Each target workload has a configuration file under `configs/`. So there should be 6 `.yml` files besides the `template.yml`. 

Please refer to [template.yml](./template.yml) to see how we organize configuration file. 

## Recommended Configurations

We provide 3 recommended configurations for each target workload. Ideally, the recommended configurations should locate on the Pareto Frontier of the latest MOO model.

However, since we only finished running one round MOO round on the Yeeha traces, it seems not realistic for us to provide the real "recommended" configurations before the DEMO. 

As an alternative approach (maybe not a good one but feasible), let us manually choose some configurations as the "recommended" ones first. We can choose one for the best latency, one for the best throughput, one for the cost for streaming cases; one for the best latency, one for the best cpu util, and one in between for batch cases. 

## Knobs Definition

Knob name(or id) is used in `wl-confs` (tab-2) and `wl-perfermance-model`(tab-3) in the configuraion file. We treats all the knobs *in a specific order*. 

- For batch jobs, `[k1, k2, k3, k4, k5, k6, k7, k8, s1, s2, s3, s4]` are used to represent all the chosen knobs. 

    ```python
    # for batch jobs.
    k1 = 'spark.defalut.parallelism'
    k2 = 'spark.executor.instances'
    k3 = 'spark.executor.cores'
    k4 = 'spark.executor.memory'
    k5 = 'spark.reducer.maxsizeInFlight'
    k6 = 'spark.shuffle.sort.bypassMergeThreshold'
    k7 = 'spark.shuffle.compress'
    k8 = 'spark.memory.fraction'
    s1 = 'spark.sql.inMemoryColumnarstorage.batchsize'
    s2 = 'spark.sql.files.maxPartitionBytes'
    s3 = 'spark.sql.autoBroadcastJoinThreshold'
    s4 = 'spark.sql.shuffle.partitions'
    ```

- For streaming jobs, TBD.

## Objective Definition

Objective id is used in `wl-moo` (tab-4) and `wl-e2e` (tab-5) in the configuration files. For convenient, we use 

- `0` for latency
- `1` for throughput
- `2` for cost 
- `3` for cpuutil

To note, we only show `latency + throughput` in the demo, so we do NOT need to modify the objective ids in the template configuraion file.

## Algorithm Definition
Algorithm id is used in `wl-e2e`(tab-5) in the demo, we currently provide three algorithm:

- `0` for UDAO
- `1` for Manual
- `2` for Ottertune


