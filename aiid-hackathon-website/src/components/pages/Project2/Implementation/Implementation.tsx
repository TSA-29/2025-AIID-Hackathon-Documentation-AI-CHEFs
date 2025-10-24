import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Implementation.module.css';

const Implementation: React.FC = () => {
  return (
    <div className={styles.implementationPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project 2: Implementation</h1>
          <p className={styles.subtitle}>
            Sustainable agriculture system: Technical implementation details, IoT sensor networks, and precision farming deployment
          </p>
        </div>

        <div className={styles.implementationContent}>
          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⏱️</span>
              Development Timeline
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 0-8</div>
                    <h3 className={styles.timelineTitle}>Hardware Setup & Sensor Calibration</h3>
                    <p className={styles.timelineDesc}>
                      Deployed IoT sensor networks across test farms, calibrated soil moisture sensors, and established data collection infrastructure
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 9-20</div>
                    <h3 className={styles.timelineTitle}>Data Pipeline Development</h3>
                    <p className={styles.timelineDesc}>
                      Built real-time data processing pipeline, implemented ML models for crop analysis, and created predictive analytics
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 21-32</div>
                    <h3 className={styles.timelineTitle}>Mobile App Development</h3>
                    <p className={styles.timelineDesc}>
                      Created farmer-friendly mobile interface, implemented offline capabilities, and integrated with hardware systems
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 33-44</div>
                    <h3 className={styles.timelineTitle}>Cloud Platform & Analytics</h3>
                    <p className={styles.timelineDesc}>
                      Developed cloud-based dashboard, implemented advanced analytics, and created reporting and visualization tools
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>Hours 45-48</div>
                    <h3 className={styles.timelineTitle}>Testing & Deployment</h3>
                    <p className={styles.timelineDesc}>
                      Field testing with real farmers, performance optimization, and final deployment to production environments
                    </p>
                  </div>
                  <div className={styles.timelineDot}></div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🌾</span>
              IoT Sensor Network Architecture
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.architectureDiagram}>
                <h3 className={styles.diagramTitle}>Smart Farm Sensor Pipeline</h3>
                <div className={styles.architectureFlow}>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🌡️</span>
                    <div className={styles.archTitle}>Environmental Sensors</div>
                    <p className={styles.archDesc}>Temperature, humidity, rainfall</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>💧</span>
                    <div className={styles.archTitle}>Soil Sensors</div>
                    <p className={styles.archDesc}>Moisture, pH, nutrients</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>📡</span>
                    <div className={styles.archTitle}>IoT Gateway</div>
                    <p className={styles.archDesc}>Data collection & transmission</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>📊</span>
                    <div className={styles.archTitle}>AI Analytics</div>
                    <p className={styles.archDesc}>Crop health predictions</p>
                  </div>
                  <div className={styles.archComponent}>
                    <span className={styles.archIcon}>🚜</span>
                    <div className={styles.archTitle}>Automation</div>
                    <p className={styles.archDesc}>Smart irrigation control</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔧</span>
              Sensor Technology Stack
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.sensorGrid}>
                <div className={styles.sensorCategory}>
                  <h3 className={styles.sensorCategoryTitle}>
                    <span>🌡️</span> Environmental Monitoring
                  </h3>
                  <div className={styles.sensorList}>
                    <span className={styles.sensorItem}>DHT22 Temperature/Humidity</span>
                    <span className={styles.sensorItem}>BMP280 Barometric Pressure</span>
                    <span className={styles.sensorItem}>Rain Gauges</span>
                    <span className={styles.sensorItem}>Wind Speed Sensors</span>
                    <span className={styles.sensorItem}>Solar Radiation Meters</span>
                  </div>
                </div>
                <div className={styles.sensorCategory}>
                  <h3 className={styles.sensorCategoryTitle}>
                    <span>💧</span> Soil Analysis
                  </h3>
                  <div className={styles.sensorList}>
                    <span className={styles.sensorItem}>Capacitive Moisture Sensors</span>
                    <span className={styles.sensorItem}>pH Probes</span>
                    <span className={styles.sensorItem}>NPK Nutrient Sensors</span>
                    <span className={styles.sensorItem}>Soil Temperature</span>
                    <span className={styles.sensorItem}>Electrical Conductivity</span>
                  </div>
                </div>
                <div className={styles.sensorCategory}>
                  <h3 className={styles.sensorCategoryTitle}>
                    <span>🌾</span> Crop Monitoring
                  </h3>
                  <div className={styles.sensorList}>
                    <span className={styles.sensorItem}>Multispectral Cameras</span>
                    <span className={styles.sensorItem}>NDVI Sensors</span>
                    <span className={styles.sensorItem}>Leaf Wetness Sensors</span>
                    <span className={styles.sensorItem}>Growth Stage Monitors</span>
                    <span className={styles.sensorItem}>Yield Prediction Sensors</span>
                  </div>
                </div>
                <div className={styles.sensorCategory}>
                  <h3 className={styles.sensorCategoryTitle}>
                    <span>⚙️</span> Control Systems
                  </h3>
                  <div className={styles.sensorList}>
                    <span className={styles.sensorItem}>Smart Irrigation Valves</span>
                    <span className={styles.sensorItem}>Fertilizer Dispensers</span>
                    <span className={styles.sensorItem}>Climate Control Systems</span>
                    <span className={styles.sensorItem}>Automated Harvesting</span>
                    <span className={styles.sensorItem}>Pest Control Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🚜</span>
              Field Deployment Strategy
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.fieldDeployment}>
                <div className={styles.fieldHeader}>
                  <h3>Smart Farm Pilot Program</h3>
                </div>
                <div className={styles.fieldStats}>
                  <div className={styles.fieldStat}>
                    <div className={styles.fieldNumber}>50</div>
                    <div className={styles.fieldLabel}>Test Farms</div>
                  </div>
                  <div className={styles.fieldStat}>
                    <div className={styles.fieldNumber}>10,000</div>
                    <div className={styles.fieldLabel}>Acres Covered</div>
                  </div>
                  <div className={styles.fieldStat}>
                    <div className={styles.fieldNumber}>500+</div>
                    <div className={styles.fieldLabel}>Sensors Deployed</div>
                  </div>
                  <div className={styles.fieldStat}>
                    <div className={styles.fieldNumber}>24/7</div>
                    <div className={styles.fieldLabel}>Monitoring</div>
                  </div>
                </div>
                <div className={styles.fieldImage}>🌾</div>
                <p>
                  Our pilot program spans diverse agricultural environments: row crops, orchards, greenhouses, and livestock farms.
                  Each location is equipped with customized sensor arrays tailored to specific crop types and farming practices.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💻</span>
              Key Implementation Details
            </h2>
            <div className={styles.sectionContent}>
              <h3>Real-time Data Processing Pipeline</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>class</span> <span className={styles.codeFunction}>SensorDataProcessor</span>:<br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>__init__</span>(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.sensor_data = &#123;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.ml_model = load_crop_health_model()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.irrigation_controller = IrrigationController()<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>async def</span> <span className={styles.codeFunction}>process_sensor_readings</span>(self, sensor_id, data):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Validate and clean sensor data</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cleaned_data = self.validate_sensor_data(data)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Predict crop health and yield</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;health_prediction = self.ml_model.predict(cleaned_data)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;yield_estimate = self.calculate_yield_potential(cleaned_data)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeComment}># Make automated decisions</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> health_prediction[<span className={styles.codeString}>"stress_level"</span>] &gt; 0.7:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>await</span> self.irrigation_controller.adjust_irrigation(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sensor_id, health_prediction[<span className={styles.codeString}>"water_needed"</span>]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"health_prediction"</span>: health_prediction,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"yield_estimate"</span>: yield_estimate,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"actions_taken"</span>: actions_taken,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"timestamp"</span>: datetime.now()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </div>

              <h3>Smart Irrigation Control Algorithm</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>optimize_irrigation_schedule</span>(field_data, weather_forecast):<br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Calculate base water requirement</span><br/>
                &nbsp;&nbsp;base_water_need = calculate_crop_water_requirement(field_data[<span className={styles.codeString}>"crop_type"</span>])<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Adjust for soil moisture levels</span><br/>
                &nbsp;&nbsp;moisture_factor = 1.0 - (field_data[<span className={styles.codeString}>"soil_moisture"</span>] / 100.0)<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Weather-based adjustments</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>if</span> weather_forecast[<span className={styles.codeString}>"rain_probability"</span>] &gt; 0.6:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;weather_factor = 0.5&nbsp;&nbsp;<span className={styles.codeComment}># Reduce irrigation if rain expected</span><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>else</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;weather_factor = 1.2&nbsp;&nbsp;<span className={styles.codeComment}># Increase irrigation in dry weather</span><br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Calculate optimal irrigation amount</span><br/>
                &nbsp;&nbsp;optimal_water = base_water_need * moisture_factor * weather_factor<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"irrigation_amount"</span>: optimal_water,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"schedule_time"</span>: optimal_irrigation_time(optimal_water),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"efficiency_score"</span>: calculate_water_efficiency(optimal_water)<br/>
                &nbsp;&nbsp;&#125;
              </div>

              <h3>Crop Health Prediction Model</h3>
              <div className={styles.codeBlock}>
                <span className={styles.codeComment}># Machine Learning Model for Crop Disease Detection</span><br/>
                <span className={styles.codeKeyword}>def</span> <span className={styles.codeFunction}>predict_crop_health</span>(sensor_data, satellite_imagery):<br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Combine sensor data with satellite imagery</span><br/>
                &nbsp;&nbsp;combined_features = extract_features(sensor_data, satellite_imagery)<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Random Forest classifier for disease detection</span><br/>
                &nbsp;&nbsp;disease_prediction = disease_model.predict(combined_features)<br/>
                &nbsp;&nbsp;disease_probabilities = disease_model.predict_proba(combined_features)<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># CNN for crop stress detection from images</span><br/>
                &nbsp;&nbsp;stress_analysis = stress_analyzer.analyze(satellite_imagery)<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeComment}># Generate comprehensive health report</span><br/>
                &nbsp;&nbsp;health_report = &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"overall_health"</span>: calculate_health_score(disease_prediction, stress_analysis),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"disease_risk"</span>: &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"predicted_disease"</span>: disease_prediction,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"confidence"</span>: max(disease_probabilities),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"affected_area"</span>: identify_affected_areas(satellite_imagery)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"stress_factors"</span>: stress_analysis,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeString}>"recommendations"</span>: generate_treatment_recommendations(disease_prediction, stress_analysis)<br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> health_report
              </div>
            </div>
          </section>

          <section className={styles.implementationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⚠️</span>
              Technical Challenges & Solutions
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.challengesGrid}>
                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>📡</span> Remote Connectivity Issues
                  </h3>
                  <p className={styles.challengeDesc}>
                    Rural farms often have poor internet connectivity, making real-time data transmission challenging.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      LoRaWAN networks for long-range communication, edge computing for local data processing, and satellite backup connectivity.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>🔋</span> Sensor Durability
                  </h3>
                  <p className={styles.challengeDesc}>
                    Agricultural sensors face harsh environmental conditions including water, dust, and extreme temperatures.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      IP68-rated waterproof enclosures, solar power systems with battery backup, and ruggedized sensor housings.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>📊</span> Data Scalability
                  </h3>
                  <p className={styles.challengeDesc}>
                    Managing high-frequency data from hundreds of sensors across multiple farms requires efficient processing.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Edge computing architecture, data compression algorithms, and distributed database systems with auto-scaling.
                    </p>
                  </div>
                </div>

                <div className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>
                    <span>👨‍🌾</span> Farmer Adoption
                  </h3>
                  <p className={styles.challengeDesc}>
                    Traditional farmers may be resistant to new technology and complex digital interfaces.
                  </p>
                  <div className={styles.solutionBox}>
                    <h4 className={styles.solutionTitle}>Solution Implemented:</h4>
                    <p className={styles.solutionDesc}>
                      Intuitive mobile apps with visual interfaces, voice commands in local languages, and hands-on training programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.navigationFooter}>
          <h3>Continue Project Journey</h3>
          <div className={styles.navigationButtons}>
            <Link to="../idea" className={`${styles.navButton} ${styles.secondaryButton}`}>
              ← Back to Project Idea
            </Link>
            <Link to="result" className={`${styles.navButton} ${styles.primaryButton}`}>
              View Project Results →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;