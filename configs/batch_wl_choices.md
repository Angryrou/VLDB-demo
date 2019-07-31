# Target Workload Choosing for Batch Workloads.

The 3 target workloads used in the demo are chosen from offline workloads. The reasons we do not consider online workloads are:
1. the number of data points for each online workloads is too small (6 for each); 
2. we do not need to provide MOO and End2End tabs for batch workloads in the DEMO 

## Considerations when choosing
The choice of offline workloads are based on following points.

- One from ML, one from SQL, and one from SQL+UDF
- Considering the number of overlaps to have a relatively good performance model.
- Choose the range of objectives `latency` and `cpuutil` for each type of workload as big as possible. 

To note, I defined `range = (max - min) / max` in my computation.
 
## For ML

Choose `5-6`, the biggest top 5 overlaps.
```bash
For 5-6
latency, range: 0.907, max: 217.608, min: 20.252
cpu, range: 0.573, max: 53.533, min: 22.875
# top 5 maximum overlaps when fixing any other 10 knobs
k1_k2: 16
k5_s1: 10
k5_s2: 10
k5_s3: 10
k5_s4: 10
```

## For SQL

Choose `22-7` or `16-3`, two biggest top 4 overlaps. Maybe choose 16-3 with a bigger cpu range.
```bash
For 22-7
latency, range: 0.921, max: 97.138, min: 7.643
cpu, range: 0.392, max: 53.177, min: 32.305
# top 5 maximum overlaps when fixing any other 10 knobs
k1_k2: 16
k5_s1: 10
k5_s2: 10
k5_s3: 10
k5_s4: 10

For 16-3
latency, range: 0.940, max: 128.661, min: 7.658
cpu, range: 0.841, max: 72.586, min: 11.542
# top 5 maximum overlaps when fixing any other 10 knobs
k1_k2: 16
k5_s1: 10
k5_s2: 10
k5_s3: 10
k2_k5: 8
```

## For SQL with UDF, big latency and cpu range, together with relatively big number of overlaps.

Choose
```bash
For 1-7
latency, range: 0.942, max: 42.073, min: 2.460
cpu, range: 0.838, max: 88.952, min: 14.366
# top 5 maximum overlaps when fixing any other 10 knobs
k1_k2: 16
k2_k5: 8
k8_s1: 7
k8_s2: 7
k8_s3: 7
```